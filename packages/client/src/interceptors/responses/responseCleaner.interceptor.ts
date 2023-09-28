export function responseCleanerInterceptor(response) {
    if (response.data.data && response.data.success) {
        return response.data.data;
    }
    return response.data;
}
