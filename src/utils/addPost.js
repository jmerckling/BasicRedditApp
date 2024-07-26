function readableTime(createdDateMili) {
    const intervals = {
        forYears: 31536000,
        forMonths: 2592000,
        forDays: 86400,
        forHours: 3600,
        forMinutes: 60
    }
    let seconds = Math.floor(((new Date().getTime() / 1000) - createdDateMili));
    let interval = seconds / intervals.forYears;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / intervals.forMonths;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / intervals.forDays;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / intervals.forHours;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / intervals.forMinutes;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

export const addPost = async (postsArray, response) => {
    for await (const post of response.data.children) {
        postsArray.push({
            post_id: post.data.id,
            title: post.data.title,
            date_created: readableTime(post.data.created),
            score: post.data.score,
            author_name: post.data.author,
            thumbnail: post.data.thumbnail,
            num_comments: post.data.num_comments,
            url: post.data.url
        });
    }
}