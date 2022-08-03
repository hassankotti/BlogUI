import React from 'react'

const CommentForm = () => {
    return (
        <div dir="rtl" className="flex-col flex overflow-hidden dark:bg-gray-500 py-6 sm:py-12 px-4">
            <span className="border-r-4 border-teal-500  my-6 pr-2 text-xl font-medium uppercase">كن اول من يعلق</span>
            <form action="#">
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-2 mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">اكتب تعلقيك</label>
                        <textarea className="block w-full rounded border border-gray-300 bg-white p-2.5 text-sm text-gray-900 input-focus dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 "
                            placeholder="برجاء كتابة التعلقي الخاص بك"></textarea>
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">الأسم</label>
                        <input type="text" placeholder="برجاء ادخال إلاسم " className="input-focus block w-full rounded border border-gray-300 bg-white p-2.5 text-sm text-gray-900 input-focus dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 " />
                    </div>
                    <div className="mb-6">
                        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"> البريد الالكتروني</label>
                        <input type="text" placeholder="برجاء ادخال البريد الالكتروني" className="input-focus block w-full rounded border border-gray-300 bg-white p-2.5 text-sm text-gray-900 input-focus dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 " />
                    </div>

                    <button className="input-focus w-60 rounded bg-teal-500 py-2 text-white hover:bg-teal-600">
                        اضف تعليقك</button>

                </div>
            </form>
        </div>
    )
}

export default CommentForm