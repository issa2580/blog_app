import React, { useState,useEffect } from 'react'
import CommentForm from './CommentForm'

import { getCommentsData } from '../../data/comments'
import Comments from './Comments'

const CommentContainer = ({className, loggedInId}) => {

    const [comments, setComments] = useState([])
    const [affectedCooment, setaffectedCooment] = useState(null)

    const mainComment = comments.filter((comment) => comment.parent === null)

    console.log(comments)

    useEffect(() => {
        (async () => {
            const commentData = await getCommentsData(comments)
            setComments(commentData)
        })()
    }, [])

    const addCommentHandler = (value, parent = null, replyOnUser = null) => {
        const newComment = {
            _id: Math.random().toString(),
            user: {
            _id: "a",
            name: "Mohammad Rezaii",
            },
            desc: value,
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: new Date().toISOString(),
        }
        setComments((curState) => {
            return [...curState, newComment]
        })
        setaffectedCooment(null)
    }

    const updateCommentHandler = (value, commentId) => {
        const updatedComment = comments.map((comment) => {
            if (comment._id === commentId) {
                return {
                  ...comment,
                    desc: value
                }
            }
            return comment
        })
        setComments(updatedComment)
        setaffectedCooment(null)
    }

    const deleteCommentHandler = (commentId) => {
        const updatedComment = comments.filter((comment) => {
            return comment._id !== commentId
        })
        setComments(updatedComment)
    }

    const getReplyHandler = (commentId) => {
        return comments.filter((comment) => comment.parent === commentId).sort((comment1, comment2) => {
            return new Date(comment1.created).getTime() - new Date(comment2.created).getTime();
        })
    }

    return (
        <div className={`${className}`}>
            <CommentForm 
                btnSubmit= 'Send'
                formSubmitHandler={(value) => addCommentHandler(value)}
            />
            <div className=' space-y-4 mt-8'>
                {mainComment.map((comment) => (
                    <Comments 
                        key={comment._id}
                        comment={comment} 
                        loggedInId={loggedInId}
                        affectedCooment={affectedCooment}
                        setaffectedCooment={setaffectedCooment} 
                        addComment={addCommentHandler}
                        updateComment={updateCommentHandler}
                        deleteComment={deleteCommentHandler}
                        getReplyHandler={getReplyHandler(comment._id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommentContainer