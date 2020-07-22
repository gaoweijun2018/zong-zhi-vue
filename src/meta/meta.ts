export type StatusType = 'success-dot' | 'error-dot' | 'processing-dot' | 'warning-dot' | 'default-dot';

/**
 * 元数据元素
 */
export type MetaElement = [number, string] | [number, string, StatusType]

/**
 * 元数据
 */
export interface MetaData {
    [name: string]: MetaElement
}

export interface ValueEnumItem {
    text: string;
    status?: StatusType;
}

export interface ValueEnum {
    [key: string]: ValueEnumItem;
}

/**
 * 常量
 */
export interface Meta {
    metaData: MetaData
    list: Array<MetaElement>
    valueEnum: ValueEnum
}
