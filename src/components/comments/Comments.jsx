import React from 'react'

import { FiMessageSquare } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

import { images } from '../../constants/images'
import CommentForm from './CommentForm';

const Comments = ({comment, loggedInId, updateComment, deleteComment, getReplyHandler, affectedCooment, setaffectedCooment, addComment, parentId = null}) => {

    const isLoggedIn = Boolean(loggedInId)
    const commentBelogUserId = loggedInId === comment.user._id
    const isReplaying = affectedCooment && affectedCooment.type === 'replying' && affectedCooment._id === comment._id
    const isEditing = affectedCooment && affectedCooment.type === 'editing' && affectedCooment._id === comment._id
    const repliedCommentId = parentId ? parentId : comment._id
    const replyOnlyUserId = comment.user._id


    return (
        <div 
            className='flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg'>
            <img 
                className='w-9 h-9 object-cover rounded-full'
                src={images.Avatar} 
                alt='prifile user' 
            />
            <div 
                className='flex-1 flex flex-col'>
                    <h5 
                        className='font-bold text-dark-hard text-xs'>
                        {comment.user.name}
                    </h5>
                    <span 
                        className='text-xs text-dark-light'>
                        {new Date(comment.createdAt).toLocaleDateString('en-US',{
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit'
                        })}
                    </span>
                    {!isEditing && (
                        <p className=' font-opensans mt-[10px] text-dark-light'>
                            {comment.desc}
                        </p>
                    )}
                    {isEditing && (
                        <CommentForm 
                            btnSubmit='Update'
                            formSubmitHandler={(value) => updateComment(value, comment._id)}
                            formCanceledHandler={(value) => setaffectedCooment(null)}
                            initialText={comment.desc}
                        />
                    )}
                    <div
                        className='flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
                        {isLoggedIn && (
                            <button
                                className='flex items-center space-x-2'
                                onClick={() => setaffectedCooment({type: 'replying', _id: comment._id})}>
                                <FiMessageSquare className='w-4 h-auto' />
                                <span>Replay</span>
                            </button>
                        )}
                        {commentBelogUserId && (
                            <>
                                <button
                                    onClick={() => setaffectedCooment({type: 'editing', _id: comment._id})}
                                    className='flex items-center space-x-2'>
                                    <FiEdit2 className='w-4 h-auto' />
                                    <span>Edit</span>
                                </button>
                                <button
                                    onClick={() => deleteComment(comment._id)}
                                    className='flex items-center space-x-2'>
                                    <FiTrash className='w-4 h-auto' />
                                    <span>Delete</span>
                                </button>
                            </>
                        )}
                    </div>
                    {isReplaying && (
                        <CommentForm 
                            btnSubmit='Reply' 
                            formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnlyUserId)} 
                            formCanceledHandler={() => setaffectedCooment(null)}
                        />
                    )}
                    {getReplyHandler.length > 0 && (
                        <div>
                            {getReplyHandler.map((reply) => (
                                <Comments 
                                    key={reply._id}
                                    comment={reply} 
                                    loggedInId={loggedInId}
                                    affectedCooment={affectedCooment}
                                    setaffectedCooment={setaffectedCooment} 
                                    addComment={addComment}
                                    updateComment={updateComment}
                                    deleteComment={deleteComment}
                                    getReplyHandler={[]}
                                    parentId={comment._id}
                                />
                            ))}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Comments