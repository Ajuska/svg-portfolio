import type { Handle } from '@sveltejs/kit';

const securityHeaders = {
	'Cross-Origin-Embedder-Policy': 'require-corp',
	'Cross-Origin-Opener-Policy': 'same-origin',
	'Cross-Origin-Resource-Policy': 'same-origin',
	'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
	'X-Frame-Options': 'DENY',
	'X-Content-Type-Options': 'nosniff',
	'Referrer-Policy': 'same-origin',
	'Permissions-Policy': 'camera=(), geolocation=(), microphone=(), payment=(), usb=()'
};

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	Object.entries(securityHeaders).forEach(([header, value]) => response.headers.set(header, value));

	return response;
};
