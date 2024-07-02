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

		getProjects: builder.query({
			query: () => ({
				url: '/projects',
				method: 'GET'
			}),
			providesTags: ['projects']
		}),

		getProject: builder.query({
			query: (id) => ({
				url: `/projects/${id}`,
				method: 'GET'
			})
		}),

		deleteProject: builder.mutation({
			query: (id) => ({
				url: `/projects/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['projects']
		}),

		updateProject: builder.mutation({
			query: ({ id, data }) => ({
				url: `/projects/${id}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: ['projects']
		})
	})
});

export const {
	useAddProjectMutation,
	useGetProjectQuery,
	useGetProjectsQuery,
	useUpdateProjectMutation,
	useDeleteProjectMutation
} = projectApi;
