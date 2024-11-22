import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);  // Get current user data from Redux store

    useEffect(() => {
        // Fetch posts only once when the component mounts
        appwriteService.getPosts([]).then((response) => {
            if (response) {
                console.log(response);  // Log all posts for debugging

                // Filter posts to only show the current user's posts
                const userPosts = response.documents.filter(post => post.userId === userData.$id);

                setPosts(userPosts);  // Set filtered posts to the state
            }
        }).catch(error => {
            console.error("Error fetching posts:", error);
        });
    }, [userData]);  // Add userData as a dependency to re-run effect if the user changes

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <p>No posts found for the current user.</p>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
