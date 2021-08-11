import { createRequestRoute } from './createRequestRoute';
import { getAllGroupsRoute } from './getAllGroupsRoute';
import { getUserGroupsRoute } from './getUserGroupsRoute';

export const routes = [
	createRequestRoute,
	getAllGroupsRoute,
	getUserGroupsRoute,
];