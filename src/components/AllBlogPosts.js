import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PostCard from '../components/reusable/PostCard'

const AllBlogPosts = () => {
    const [note, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            }).then(data => {
                setNotes(data);
            })
    }, [])
    return (
        <div>
            <Grid container>
                {note.map(data => {
                    return (
                        <Grid key={data.id} item md={3} sm={6} xs={12}>
                            <PostCard data={data} />
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
}

export default AllBlogPosts;
