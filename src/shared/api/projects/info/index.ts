import { instance } from '../../instance'

export const getProjectsInfo = () =>
	instance.get<Projects>('/users/ovacio/repos')
