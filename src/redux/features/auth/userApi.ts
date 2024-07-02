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

		getProfile: builder.query({
			query: () => ({
				url: '/profile',
				method: 'GET'
			}),
			providesTags: ['profile']
		}),

		updateProfile: builder.mutation({
			query: ({ id, data }) => ({
				url: `/profile/${id}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: ['profile']
		})
	})
});

export const { useLoginMutation, useGetProfileQuery, useUpdateProfileMutation } = userApi;
