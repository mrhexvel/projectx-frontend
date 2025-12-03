export const getStringValue = (
	value: Record<string, never> | null | string | undefined
): string => {
	if (!value) return ''
	if (typeof value === 'string') return value
	if (typeof value === 'object' && Object.keys(value).length === 0) return ''
	return ''
}
