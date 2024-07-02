import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (userInfo) => ({
				url: '/auth/login',
				method: 'POST',
				body: userInfo
			})
		}),

		updateProfile: builder.mutation({
			query: ({ id, data }) => ({
				url: `/profile/${id}`,
				method: 'PUT',
				body: data
			})
		})
	})
});

export const { useLoginMutation } = userApi;
