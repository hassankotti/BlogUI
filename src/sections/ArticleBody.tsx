import React from 'react'
import MarkdownView from 'react-showdown';
import SideHeading from '../components/SideHeading';
const ArticleBody = ({ article }) => {

    const markdown = `${article}`;
    return (
        <MarkdownView
            markdown={markdown}
            options={{ tables: true, emoji: true }}
        />
    )
}

export default ArticleBody