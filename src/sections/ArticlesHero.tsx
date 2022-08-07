import React from 'react'
const ArticlesHero = ({ article }) => {
    const hero = 'https://s3-alpha-sig.figma.com/img/6c70/3c18/d03a2d7f24a1fd64796a178ce79ab1f7?Expires=1660521600&Signature=I-tBfxy8YCaZT2WoaQ9FdpDcfNGo-yne11LcqzStczSgTGr-G6Sw-F0Kp5c4RpeyVQO1lZZsiUzXvJX9iBQxOXLbqQf~K3i3vv83vrYDMdfkcRNvHS-accKvc7Pv~lBz5H-4ImQY5YPo3DofVyJuTddGGbIwqasSuIu7tm9y8lbEqOUEFHKM38XOFNFBat2GJKlAUPbYJATfMMPV0Kw21~fVMCnLBkOJk~ugWp5zyup4~anbGE0jaHIPQIr5TWQi1uUB8M8GQuoStrVcHQ8n9uravajqjLLBqvw7ACk9X1MWb32ihC-XBvIZBByH-WxYG-cFXKVKs8S0JxZUlxHlsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
    return (
        <section className="flex h-64 flex-col justify-center overflow-hidden bg-blue-900 dark:bg-heavy-metal-800/50 py-6 sm:py-12 bg-hero bg-center dark:bg-hero_dark  aspect-h-9">
            <div className="container">
                <div className="space-x-2 flex space-x-reverse">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" className="h-6 w-6">
                        <path d="M13.781 5.762L7.37.512a.562.562 0 00-.738 0L.219 5.762a.513.513 0 00-.164.205.543.543 0 00-.055.246v6.412c0 .483.169.893.506 1.23.346.347.76.52 1.244.52h10.5c.483 0 .893-.173 1.23-.52.347-.337.52-.747.52-1.23V6.213a.542.542 0 00-.055-.246.512.512 0 00-.164-.205zm-5.031 7.45h-3.5v-2.925c0-.483.169-.893.506-1.23.346-.347.76-.52 1.244-.52.483 0 .893.173 1.23.52.347.337.52.747.52 1.23v2.926zm4.088-.587c0 .164-.06.305-.178.424a.557.557 0 01-.41.164H9.912v-2.926c0-.4-.073-.78-.219-1.135a2.99 2.99 0 00-1.559-1.545A2.809 2.809 0 007 7.375c-.401 0-.78.077-1.135.232a2.99 2.99 0 00-1.558 1.545 2.96 2.96 0 00-.22 1.135v2.926H1.75a.603.603 0 01-.424-.164.603.603 0 01-.164-.424V6.486L7 1.715l5.838 4.771v6.139z" fill="#5DD5C4" />
                    </svg>
                    <a href="/" className="text-teal-500">الرئيسية /</a>
                    <a href={article.type == 'article' ? '/articles' : '/reports_and_studies'} className="text-white">{article.type == 'article' ? 'المقالات' : 'التقارير والدراسات'}</a>
                </div>
                <div className="py-4"><h2 className="text-4xl text-white"> {article.title} </h2></div>
                <div className="flex space-x-2 space-x-reverse">
                    <img className="h-8 w-8" src={hero} alt="" />
                    <a href="#" className="text-white"> بواسطة / {article.author} | منذ {article.date}</a>
                </div>
            </div>
        </section>
    )
}

export default ArticlesHero