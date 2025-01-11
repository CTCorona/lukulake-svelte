import posthog from 'posthog-js';
import { env } from '$env/dynamic/public';
import { browser } from '$app/environment';

export const load = async () => {
	if (browser && process.env.NODE_ENV === 'production') {
		posthog.init(env.PUBLIC_POSTHOG_API_KEY, {
			api_host: env.PUBLIC_POSTHOG_API_HOST,
			person_profiles: 'always'
		});
	}
	return;
};
