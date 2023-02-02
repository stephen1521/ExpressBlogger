const validateBlogData = (blogData) => {
    if(blogData.title === undefined || typeof(blogData.title) !== 'string' || blogData.title.length > 40){
        return {
            isValid: false,
            message: 'Title is required, it must be a string, and less than or equal to 40 characters long(including whitespace)'
        }
    }
    if(blogData.text === undefined || typeof(blogData.text) !== 'string'){
        return {
            isValid: false,
            message: 'Text is required and it must be a string'
        }
    }
    if(blogData.author === undefined || typeof(blogData.author) !== 'string' || blogData.author.length > 40){
        return {
            isValid: false,
            message: 'Author is required, it must be a string, and less than or equal to 40 characters long(including whitespace)'
        }
    }
    if(blogData.category !== undefined && blogData.category.length > 0){
        if(!Array.isArray(blogData.category)){
            return {
                isValid: false,
                message: 'Category must be an array'
            }
        }
        if(blogData.category.length > 10){
            return {
                isValid: false,
                message: 'Category has to be less than 10 entries'
            }
        }
        blogData.category.forEach(category => {
            if(typeof(category) !== 'string'){
                return {
                    isValid: false,
                    message: 'All entries in category must be a string'
                }
            }
        })
        const validCategories = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];
        const check = blogData.category.map(category => {
            if(!validCategories.includes(category)){
               return false;
            }
        })
        if(check.includes(false)){
            return {
                isValid: false,
                message: 'The entries in category must be one of the following Lorem, ipsum, dolor, sit, amet'
            }
        }
    }
    return {
        isValid: true
    }

}

module.exports = {
    validateBlogData
}