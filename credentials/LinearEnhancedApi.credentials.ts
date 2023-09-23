import type { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class LinearEnhancedApi implements ICredentialType {
	name = 'linearEnhancedApi';

	displayName = 'Linear Enhanced API';

	documentationUrl = 'https://developers.linear.app/docs/graphql/working-with-the-graphql-api';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.apiKey}}',
			},
		},
	};
}
