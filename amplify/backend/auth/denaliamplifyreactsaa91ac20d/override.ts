import {
  AmplifyAuthCognitoStackTemplate,
  AmplifyProjectInfo,
} from "@aws-amplify/cli-extensibility-helper";

export function override(
  resources: AmplifyAuthCognitoStackTemplate,
  amplifyProjectInfo: AmplifyProjectInfo
) {
  // Add the new resources first
  resources.addCfnResource(
    {
      type: "AWS::Cognito::UserPoolIdentityProvider",
      properties: {
        AttributeMapping: {
          email: "email",
          family_name: "family_name",
          given_name: "given_name",
          username: "sub",
        },
        ProviderDetails: {
          attributes_request_method: "GET",
          client_id:
            "{{resolve:secretsmanager:cognito-oidc:SecretString:client_id}}",
          client_secret:
            "{{resolve:secretsmanager:cognito-oidc:SecretString:client_secret}}",
          authorize_scopes: "openid email profile phone",
          oidc_issuer:
            "https://login.microsoftonline.com/88689120-b428-4d24-a4ac-c33d7d202cba/v2.0",
        },
        ProviderName: "AzureADB2C",
        ProviderType: "OIDC",
        UserPoolId: {
          Ref: "UserPool",
        },
      },
    },
    "AzureADB2CIdentityProvider"
  );

  resources.addCfnResource(
    {
      type: "AWS::Cognito::UserPoolDomain",
      properties: {
        Domain: "reactsample",
        UserPoolId: {
          Ref: "UserPool",
        },
      },
    },
    "UserPoolDomain"
  );

  // Then deploy the client changes
  // resources.userPoolClient.callbackUrLs = ["http://localhost:5173", "https://main.d24vz7b1gy7w72.amplifyapp.com"];
  // resources.userPoolClient.supportedIdentityProviders = ["AzureADB2C"];
  // resources.userPoolClient.allowedOAuthScopes = ["openid", "email", "profile", "phone", "aws.cognito.signin.user.admin"];
  // resources.userPoolClient.allowedOAuthFlows = ["code"];
  // resources.userPoolClient.allowedOAuthFlowsUserPoolClient = true;

  resources.userPoolClientWeb.callbackUrLs = [
    "http://localhost:5173",
    "https://main.d24vz7b1gy7w72.amplifyapp.com",
  ];
  resources.userPoolClientWeb.supportedIdentityProviders = ["AzureADB2C"];
  resources.userPoolClientWeb.allowedOAuthScopes = [
    "openid",
    "email",
    "profile",
    "phone",
    "aws.cognito.signin.user.admin",
  ];
  resources.userPoolClientWeb.allowedOAuthFlows = ["code"];
  resources.userPoolClientWeb.allowedOAuthFlowsUserPoolClient = true;
  resources.userPoolClientWeb.logoutUrLs = [
    "http://localhost:5173",
    "https://main.d24vz7b1gy7w72.amplifyapp.com",
  ];
}
