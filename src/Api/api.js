import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://127.0.0.1:8000/api";

// const createRequest = (url) => url;

export const HomeDetails = createApi({
  reducerPath: "HomeDetails",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHomeDetails: builder.query({
      query: () => "/home-api",
    }),
  }),
});

export const AboutMe = createApi({
  reducerPath: "AboutMe",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAboutMe: builder.query({
      query: () => "/aboutme-api",
    }),
  }),
});

export const Services = createApi({
  reducerPath: "Services",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/allServices-api",
    }),
  }),
});

export const Progress = createApi({
  reducerPath: "Progress",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProgress: builder.query({
      query: () => "/progress-api",
    }),
  }),
});
export const Projects = createApi({
  reducerPath: "Projects",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/projects-api",
    }),
  }),
});

export const Contacts = createApi({
  reducerPath: "Contacts",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts-api",
    }),
  }),
});

export const SocialMedia = createApi({
  reducerPath: "SocialMedia",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSocialMedia: builder.query({
      query: () => "/links-api",
    }),
  }),
});

export const { useGetHomeDetailsQuery } = HomeDetails;
export const { useGetAboutMeQuery } = AboutMe;
export const { useGetServicesQuery } = Services;
export const { useGetProgressQuery } = Progress;
export const { useGetProjectsQuery } = Projects;
export const { useGetContactsQuery } = Contacts;
export const { useGetSocialMediaQuery } = SocialMedia;
