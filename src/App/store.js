import { configureStore } from "@reduxjs/toolkit";
import {
  HomeDetails,
  AboutMe,
  Services,
  Progress,
  Projects,
  Contacts,
  SocialMedia,
} from "../Api/api";

export default configureStore({
  reducer: {
    [HomeDetails.reducerPath]: HomeDetails.reducer,
    [AboutMe.reducerPath]: AboutMe.reducer,
    [Services.reducerPath]: Services.reducer,
    [Progress.reducerPath]: Progress.reducer,
    [Projects.reducerPath]: Projects.reducer,
    [Contacts.reducerPath]: Contacts.reducer,
    [SocialMedia.reducerPath]: SocialMedia.reducer,
  },
});
