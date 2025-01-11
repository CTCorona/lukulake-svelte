import posthog from 'posthog-js';

type EventName = 'click-contacto' | 'click-anuncio' | 'click-footer';

type PosthogEvent = {
	eventName: EventName;
	properties?: Record<string, string>;
};

export function sendPosthogEvent({ eventName, properties }: PosthogEvent) {
	return posthog.capture(eventName, properties);
}
