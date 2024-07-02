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

		getBlogs: builder.query({
			query: () => ({
				url: '/blogs',
				method: 'GET'
			}),
			providesTags: ['blogs']
		}),

		getBlog: builder.query({
			query: (id) => ({
				url: `/blogs/${id}`,
				method: 'GET'
			})
		}),

		deleteBlog: builder.mutation({
			query: (id) => ({
				url: `/blogs/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['blogs']
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

export const { usePostBlogMutation, useGetBlogQuery, useGetBlogsQuery, useUpdateBlogMutation, useDeleteBlogMutation } =
	blogApi;
