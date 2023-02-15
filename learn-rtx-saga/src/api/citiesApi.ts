import { City } from 'models/city';
import { ListResponse } from 'models/common';
import axiosClient from './axiosClient';

const citiesApi = {
  getAll(): Promise<ListResponse<City>> {
    const url = '/cities';
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};
export default citiesApi;
