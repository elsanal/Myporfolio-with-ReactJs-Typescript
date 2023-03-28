import { Timestamp } from "firebase/firestore";

interface Project{
    id: string;
    title: string;
    createdate: Timestamp;
    description : string;
    github: string;
    images: {src:{src:string}}[];
    socials: {link:string, social:string}[];
    technologie: string;
    platform: string;
}

interface About{
    id: string;
    email: string;
    createdate: Timestamp;
    introduction : string;
    phone: string;
    social_network: {social_link:string, src:{src:string}}[];
    src: {src:string};
}

interface Service{
    id: string;
    title: string;
    description : string;
    icon_id: string;
}

interface Resume{
    id: string;
    experiences:{experience:string}[];
    languages: {language:string, level:string}[];
    skills: {level:string, title:string}[];
    src:{src:string};
    attachments:{src:string, title:string}
}



export type {Project, Service, Resume, About}