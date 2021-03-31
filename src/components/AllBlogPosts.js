import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import PostCard from '../components/reusable/PostCard'

const AllBlogPosts = () => {
    const [note, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => {
                return res.json();
            }).then(data => {
                setNotes(data);
            })
    }, [update])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:8000/notes/${id}`, {
            method: 'DELETE'
        });
        const newData = note.filter(note => note.id != id);
        setNotes(newData);
    }

    const likesUpdate = (id, likes) => {
        setUpdate(false);
        fetch(`http://localhost:8000/notes/${id}`, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ likes: likes + 1 })
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.likes)
            setUpdate(true)
                ;
        });
    }


    return (
        <div>
            <Grid container spacing={3}>
                {note.map(data => {
                    return (
                        <Grid key={data.id} item md={3} sm={6} xs={12}>
                            <PostCard
                                data={data}
                                handleDelete={handleDelete}
                                likesUpdate={likesUpdate}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </div >
    )
}

export default AllBlogPosts;
