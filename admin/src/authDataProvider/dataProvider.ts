import { fetchUtils, DataProvider, DeleteParams, DeleteResult, RaRecord, } from 'ra-core';
import { stringify } from 'query-string';
import { blobUrlConverter } from './convertBlobUrl';
import { createPost } from '../components/create';

// get the api url from .env
const apiUrl = `${process.env.REACT_APP_API_URL}`;

// define custom dataprovider to connect to mongo server
const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: `${field},${order}`,
            range: `${(page - 1) * perPage}-${page * perPage - 1}`,
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await fetchUtils.fetchJson(url);
        return {
            data: response.json,
            total: response.json.length,
        };
    },

    getOne: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;

        const response = await fetchUtils.fetchJson(url);
        return {
            data: response.json,
        };
    },

    getMany: async (resource, params) => {
        const query = {

            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        const response = await fetchUtils.fetchJson(url, {
            method: 'GET',
        });
        return {
            data: response.json,
        };
    },

    create: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        const response = await fetchUtils.fetchJson(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        });
        return {
            data: response.json,
        };
    },

    update: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const response = await fetchUtils.fetchJson(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        return {
            data: response.json,
        };
    },
    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;

        const query = {
            sort: `${field},${order}`,
            range: `${(page - 1) * perPage}-${page * perPage - 1}`,
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await fetchUtils.fetchJson(url, {
            method: 'GET',
        });
        return {
            data: response.json,
            total: response.json.length,
        };
    },
    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        const response = await fetchUtils.fetchJson(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        });
        return {
            data: response.json,
        };
    },
    deleteMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        await fetchUtils.fetchJson(url, {
            method: 'DELETE',
        });
        return {
            data: params.ids,
        };
    },
    delete: async<RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const response = await fetchUtils.fetchJson(url, {
            method: 'DELETE',
        });
        return {
            data: response.json,
        };
    },

};

export default dataProvider;
