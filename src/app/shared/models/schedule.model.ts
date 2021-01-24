export interface ScheduleModule {
    id: number;
    media: string;
    publication_date: string;
    social_network_key: Array<number>;
    status_key: string;
    text: string;
    status?: any;
}

export interface PostStatus {
    id: number;
    name: string;
    color: string;
    socialName?: string;
}