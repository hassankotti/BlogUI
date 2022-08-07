import React from 'react'

const CommentForm = () => {
    return (
        <div className="flex-col flex overflow-hidden dark:bg-heavy-metal-800 py-4 sm:py-6 px-4 md:px-6 lg:px:8 xl:px-10">
            <span className="border-r-4 border-teal-500 pr-2 mb-6 text-xl font-medium uppercase">كن اول من يعلق</span>
            <form action="#">
                <div className="grid md:grid-cols-2 gap-2">
                    <div className="md:col-span-2 mb-6">
                        <label className="mb-2 block text-sm font-medium text-heavy-metal-900 dark:text-heavy-metal-300">اكتب تعلقيك</label>
                        <textarea className="input-focus"
                            placeholder="برجاء كتابة التعلقي الخاص بك"></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-heavy-metal-900 dark:text-heavy-metal-300">الأسم</label>
                        <input type="text" placeholder="برجاء ادخال إلاسم " className="input-focus" />
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-heavy-metal-900 dark:text-heavy-metal-300"> البريد الالكتروني</label>
                        <input type="text" placeholder="برجاء ادخال البريد الالكتروني" className="input-focus" />
                    </div>

                    <button className=" w-60 rounded bg-teal-500 py-2 text-white hover:bg-teal-600" aria-label='add-comment'>
                        اضف تعليقك</button>

                </div>
            </form>
        </div>
    )
}

export default CommentForm