// Import statements
import { useEffect, useState, useCallback } from "react";
import { generateClient } from "aws-amplify/api";
import { createDevice } from "./graphql/mutations";
import { listDevices } from "./graphql/queries";
import { CreateDeviceInput, Device } from "./API";
import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";

// Constants and types
const initialState: CreateDeviceInput = { name: "", type: "", buildingId: "" };
const client = generateClient();

type AppProps = {
  signOut?: UseAuthenticator["signOut"];
  user?: AuthUser;
};

// Main App component
const App: React.FC<AppProps> = ({ signOut, user }) => {
  // State declarations
  const [formState, setFormState] = useState<CreateDeviceInput>(initialState);
  const [devices, setDevices] = useState<Device[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch devices function
  const fetchDevices = useCallback(async () => {
    try {
      const deviceData = await client.graphql({ query: listDevices });
      const fetchedDevices = deviceData.data.listDevices.items;
      setDevices(fetchedDevices);
    } catch (err) {
      console.error("Error fetching devices:", err);
      setError("Failed to fetch devices. Please try again.");
    }
  }, []);

  // Use effect for initial fetch
  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  // Input change handler
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Add device function
  const addDevice = async () => {
    try {
      if (!formState.name || !formState.type || !formState.buildingId) {
        setError("Please fill in all fields");
        return;
      }

      const newDevice = { ...formState };
      await client.graphql({
        query: createDevice,
        variables: { input: newDevice },
      });

      setDevices((prev) => [...prev, newDevice as Device]);
      setFormState(initialState);
      setError(null);
      fetchDevices(); // Refresh the list after adding a new device
    } catch (err) {
      console.error("Error creating device:", err);
      setError("Failed to create device. Please try again.");
    }
  };

  // Render
  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.mainHeading}>Device Management System</h1>
        <div style={styles.userSection}>
          <Heading level={5}>Hello, {user?.username}</Heading>
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.section}>
          <h2 style={styles.title}>Create Device</h2>
          {error && <p style={styles.error}>{error}</p>}
          <input
            name="name"
            onChange={handleInputChange}
            style={styles.input}
            value={formState.name}
            placeholder="Name"
          />
          <input
            name="type"
            onChange={handleInputChange}
            style={styles.input}
            value={formState.type}
            placeholder="Type"
          />
          <input
            name="buildingId"
            onChange={handleInputChange}
            style={styles.input}
            value={formState.buildingId}
            placeholder="Building ID"
          />
          <button style={styles.button} onClick={addDevice}>
            Create Device
          </button>
        </div>
        <div style={styles.section}>
          <h2 style={styles.title}>Device List</h2>
          <div style={styles.deviceList}>
            {devices.length === 0 ? (
              <p>No devices found.</p>
            ) : (
              devices.map((device, index) => (
                <div style={styles.device} key={device.id || index}>
                  {index + 1}. {device.name} - {device.type}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column" as const,
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "white",
  },
  mainHeading: {
    fontSize: "2rem",
    margin: 0,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    width: "100%",
  },
  section: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center" as const,
    marginBottom: 20,
    fontSize: "1.5rem",
    color: "#007bff",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 10,
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center" as const,
  },
  deviceList: {
    marginTop: 20,
  },
  device: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderRadius: 4,
  },
} as const;

export default withAuthenticator(App);
