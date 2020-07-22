class DownloadService {
    /**
     * 下载excel文件
     *
     * @param path 文件路径
     * @param name 文件名称
     */
    static downloadFile(path: string, name: string) {
        const { VUE_APP_ZZ_BASE_URL: baseUrl } = process.env;
        const location = `${baseUrl}/download?path=${path}&downloadName=${name}`;
        window.open(location, '_blank');
    }
}

export default DownloadService;
