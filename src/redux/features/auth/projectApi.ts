import { baseApi } from '../../api/baseApi';

const projectApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		addProject: builder.mutation({
			query: (data) => ({
				url: '/projects',
				method: 'POST',
				body: data
			})
		}),

		deleteProject: builder.mutation({
			query: (id) => ({
				url: `/projects/${id}`,
				method: 'DELETE'
			})
		}),

		updateProject: builder.mutation({
			query: ({ id, data }) => ({
				url: `/projects/${id}`,
				method: 'PUT',
				body: data
			})
		})
	})
});

export const { useAddProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation } = projectApi;
