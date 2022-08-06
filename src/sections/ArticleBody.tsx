import React from 'react'
import MarkdownView from 'react-showdown';
import SideHeading from '../components/SideHeading';
const ArticleBody = ({ article }) => {

    const markdown = `${article}`;
    return (
        <MarkdownView
            markdown={markdown}
            options={{ tables: true, emoji: true }}
            className='bg-white px-4 md:px-6 lg:px:8 xl:px-10 dark:bg-heavy-metal-800'
        />
    )
}

export default ArticleBody