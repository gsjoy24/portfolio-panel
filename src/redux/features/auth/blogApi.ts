import { baseApi } from '../../api/baseApi';

const blogApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		postBlog: builder.mutation({
			query: (data) => ({
				url: '/blogs',
				method: 'POST',
				body: data
			})
		}),

		deleteBlog: builder.mutation({
			query: (id) => ({
				url: `/blogs/${id}`,
				method: 'DELETE'
			})
		}),

		updateBlog: builder.mutation({
			query: ({ id, data }) => ({
				url: `/blogs/${id}`,
				method: 'PUT',
				body: data
			})
		})
	})
});

export const { usePostBlogMutation, useUpdateBlogMutation, useDeleteBlogMutation } = blogApi;
