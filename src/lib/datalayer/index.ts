import posthog from 'posthog-js'

type EventName = 'click-contacto' | 'click-logo'

type PosthogEvent = {
	eventName: EventName
	properties?: Record<string, string>
}

export function sendPosthogEvent({ eventName, properties }: PosthogEvent) {
	return posthog.capture(eventName, properties)
}
