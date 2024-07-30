import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0 // Fixed duplicate 'rocket'
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.push({
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content,
                date: new Date().toISOString(),
                userId: action.payload.userId, // Fixed userId usage
                reactions: {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0
                }
            });
        },
        addReaction: (state, action) => {
            console.log(action)
            const { postId, reaction } = action.payload;
            const postToBeUpdated = state.find(post => post.id === postId);
            if (postToBeUpdated) {
                postToBeUpdated.reactions[reaction] += 1;
            }
        }
    }
});

export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
