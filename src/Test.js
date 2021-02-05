// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Pancake = require("./Pancake.js");

function blogIdLens_get(values) {
  return values.id;
}

function blogIdLens_set(value, values) {
  return {
          id: value,
          title: values.title,
          body: values.body
        };
}

var blogIdLens = {
  get: blogIdLens_get,
  set: blogIdLens_set
};

function blogTitleLens_get(values) {
  return values.title;
}

function blogTitleLens_set(value, values) {
  return {
          id: values.id,
          title: value,
          body: values.body
        };
}

var blogTitleLens = {
  get: blogTitleLens_get,
  set: blogTitleLens_set
};

function blogBodyLens_get(values) {
  return values.body;
}

function blogBodyLens_set(value, values) {
  return {
          id: values.id,
          title: values.title,
          body: value
        };
}

var blogBodyLens = {
  get: blogBodyLens_get,
  set: blogBodyLens_set
};

function stateBlogsLens_get(values) {
  return values.blogs;
}

function stateBlogsLens_set(value, values) {
  return {
          blogs: value
        };
}

var stateBlogsLens = {
  get: stateBlogsLens_get,
  set: stateBlogsLens_set
};

var blogs = {
  hd: {
    id: 0,
    title: "Title 01",
    body: "Body 01"
  },
  tl: {
    hd: {
      id: 1,
      title: "Title 02",
      body: "Body 02"
    },
    tl: {
      hd: {
        id: 2,
        title: "Title 03",
        body: "Body 03"
      },
      tl: /* [] */0
    }
  }
};

var state = {
  blogs: blogs
};

console.log("---- ARRAYS ----");

function titleForBlogAtIndexLens(i) {
  return Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(stateBlogsLens, Pancake.List.atExn(i)), blogTitleLens);
}

console.log("\n---- View title for blog at index 0:");

console.log(Pancake.view(titleForBlogAtIndexLens(0), state));

console.log("\n---- Set title for blog at index 0:");

console.log(Pancake.set(titleForBlogAtIndexLens(0), "Foobar", state));

function titleForBlogAtIndexLensWithDefault(i) {
  return Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(stateBlogsLens, Pancake.List.atOrElse(i, {
                      id: 0,
                      title: "Fallback Title",
                      body: "Fallback Body"
                    })), blogTitleLens);
}

console.log("\n---- View title for blog at index 0:");

console.log(Pancake.view(titleForBlogAtIndexLensWithDefault(0), state));

console.log(Pancake.set(titleForBlogAtIndexLensWithDefault(1), "New Title for id 1", state));

console.log("\n---- View title for blog at index out of bounds (revert to fallback):");

console.log(Pancake.view(titleForBlogAtIndexLensWithDefault(12), state));

var List = {
  blogIdLens: blogIdLens,
  blogTitleLens: blogTitleLens,
  blogBodyLens: blogBodyLens,
  stateBlogsLens: stateBlogsLens,
  blogs: blogs,
  state: state,
  titleForBlogAtIndexLens: titleForBlogAtIndexLens,
  titleForBlogAtIndexLensWithDefault: titleForBlogAtIndexLensWithDefault
};

function blogIdLens_get$1(values) {
  return values.id;
}

function blogIdLens_set$1(value, values) {
  return {
          id: value,
          title: values.title,
          body: values.body
        };
}

var blogIdLens$1 = {
  get: blogIdLens_get$1,
  set: blogIdLens_set$1
};

function blogTitleLens_get$1(values) {
  return values.title;
}

function blogTitleLens_set$1(value, values) {
  return {
          id: values.id,
          title: value,
          body: values.body
        };
}

var blogTitleLens$1 = {
  get: blogTitleLens_get$1,
  set: blogTitleLens_set$1
};

function blogBodyLens_get$1(values) {
  return values.body;
}

function blogBodyLens_set$1(value, values) {
  return {
          id: values.id,
          title: values.title,
          body: value
        };
}

var blogBodyLens$1 = {
  get: blogBodyLens_get$1,
  set: blogBodyLens_set$1
};

function stateBlogsLens_get$1(values) {
  return values.blogs;
}

function stateBlogsLens_set$1(value, values) {
  return {
          blogs: value
        };
}

var stateBlogsLens$1 = {
  get: stateBlogsLens_get$1,
  set: stateBlogsLens_set$1
};

var blogs$1 = [
  {
    id: 0,
    title: "Title 01",
    body: "Body 01"
  },
  {
    id: 1,
    title: "Title 02",
    body: "Body 02"
  },
  {
    id: 2,
    title: "Title 03",
    body: "Body 03"
  }
];

var state$1 = {
  blogs: blogs$1
};

console.log("---- ARRAYS ----");

function titleForBlogAtIndexLens$1(i) {
  return Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(stateBlogsLens$1, Pancake.$$Array.atExn(i)), blogTitleLens$1);
}

console.log("\n---- Uppercase all blog titles:");

function upperCaseBlog(param) {
  return Pancake.over(blogTitleLens$1, (function (prim) {
                return prim.toUpperCase();
              }), param);
}

console.log(Pancake.over(stateBlogsLens$1, (function (param) {
            return param.map(upperCaseBlog);
          }), state$1));

console.log("\n---- View title for blog at index 0:");

console.log(Pancake.view(titleForBlogAtIndexLens$1(0), state$1));

console.log("\n---- Set title for blog at index 0:");

console.log(Pancake.set(titleForBlogAtIndexLens$1(0), "Foobar", state$1));

function titleForBlogAtIndexLensWithDefault$1(i) {
  return Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(stateBlogsLens$1, Pancake.$$Array.atOrElse(i, {
                      id: 0,
                      title: "Fallback Title",
                      body: "Fallback Body"
                    })), blogTitleLens$1);
}

console.log("\n---- View title for blog at index 0:");

console.log(Pancake.view(titleForBlogAtIndexLensWithDefault$1(0), state$1));

console.log(Pancake.set(titleForBlogAtIndexLensWithDefault$1(1), "New Title for id 1", state$1));

console.log("\n---- View title for blog at index out of bounds (revert to fallback):");

console.log(Pancake.view(titleForBlogAtIndexLensWithDefault$1(12), state$1));

var $$Array = {
  blogIdLens: blogIdLens$1,
  blogTitleLens: blogTitleLens$1,
  blogBodyLens: blogBodyLens$1,
  stateBlogsLens: stateBlogsLens$1,
  blogs: blogs$1,
  state: state$1,
  titleForBlogAtIndexLens: titleForBlogAtIndexLens$1,
  upperCaseBlog: upperCaseBlog,
  titleForBlogAtIndexLensWithDefault: titleForBlogAtIndexLensWithDefault$1
};

function authorNameLens_get(values) {
  return values.name;
}

function authorNameLens_set(value, values) {
  return {
          name: value
        };
}

var authorNameLens = {
  get: authorNameLens_get,
  set: authorNameLens_set
};

function blogIdLens_get$2(values) {
  return values.id;
}

function blogIdLens_set$2(value, values) {
  return {
          id: value,
          title: values.title,
          body: values.body,
          author: values.author
        };
}

var blogIdLens$2 = {
  get: blogIdLens_get$2,
  set: blogIdLens_set$2
};

function blogTitleLens_get$2(values) {
  return values.title;
}

function blogTitleLens_set$2(value, values) {
  return {
          id: values.id,
          title: value,
          body: values.body,
          author: values.author
        };
}

var blogTitleLens$2 = {
  get: blogTitleLens_get$2,
  set: blogTitleLens_set$2
};

function blogBodyLens_get$2(values) {
  return values.body;
}

function blogBodyLens_set$2(value, values) {
  return {
          id: values.id,
          title: values.title,
          body: value,
          author: values.author
        };
}

var blogBodyLens$2 = {
  get: blogBodyLens_get$2,
  set: blogBodyLens_set$2
};

function blogAuthorLens_get(values) {
  return values.author;
}

function blogAuthorLens_set(value, values) {
  return {
          id: values.id,
          title: values.title,
          body: values.body,
          author: value
        };
}

var blogAuthorLens = {
  get: blogAuthorLens_get,
  set: blogAuthorLens_set
};

function stateBlogsLens_get$2(values) {
  return values.blogs;
}

function stateBlogsLens_set$2(value, values) {
  return {
          blogs: value
        };
}

var stateBlogsLens$2 = {
  get: stateBlogsLens_get$2,
  set: stateBlogsLens_set$2
};

var blogs$2 = [
  {
    id: 0,
    title: "Title 01",
    body: "Body 01",
    author: undefined
  },
  {
    id: 1,
    title: "Title 02",
    body: "Body 02",
    author: undefined
  },
  {
    id: 2,
    title: "Title 03",
    body: "Body 03",
    author: {
      name: "roland"
    }
  }
];

var state$2 = {
  blogs: blogs$2
};

console.log("\n\n\n---- Options ----");

function authorNameLens$1(i) {
  return Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(Pancake.Infix.$great$great$neg(stateBlogsLens$2, Pancake.$$Array.atExn(i)), Pancake.$$Option.orElse({
                      name: "No Author"
                    }, blogAuthorLens)), authorNameLens);
}

console.log("\n---- View author name for blog at index 0 -- no author:");

console.log(Pancake.view(authorNameLens$1(0), state$2));

console.log("\n---- Set author name for blog at index 0 -- shoul be bar:");

console.log(Pancake.view(authorNameLens$1(0), Pancake.set(authorNameLens$1(0), "Bar", state$2)));

console.log("\n---- View author name for blog at index 2 -- no author:");

console.log(Pancake.view(authorNameLens$1(2), state$2));

console.log("\n---- Set author name for blog at index 2 -- shoul be baz:");

console.log(Pancake.view(authorNameLens$1(2), Pancake.set(authorNameLens$1(2), "Baz", state$2)));

console.log("\n---- Uppercase author name for blog at index 2 -- ROLAND:");

console.log(Pancake.view(authorNameLens$1(2), Pancake.over(authorNameLens$1(2), (function (prim) {
                return prim.toUpperCase();
              }), state$2)));

var $$Option = {
  blogIdLens: blogIdLens$2,
  blogTitleLens: blogTitleLens$2,
  blogBodyLens: blogBodyLens$2,
  blogAuthorLens: blogAuthorLens,
  stateBlogsLens: stateBlogsLens$2,
  blogs: blogs$2,
  state: state$2,
  authorNameLens: authorNameLens$1
};

function blogIdLens_get$3(values) {
  return values.id;
}

function blogIdLens_set$3(value, values) {
  return {
          id: value,
          title: values.title,
          body: values.body
        };
}

var blogIdLens$3 = {
  get: blogIdLens_get$3,
  set: blogIdLens_set$3
};

function blogTitleLens_get$3(values) {
  return values.title;
}

function blogTitleLens_set$3(value, values) {
  return {
          id: values.id,
          title: value,
          body: values.body
        };
}

var blogTitleLens$3 = {
  get: blogTitleLens_get$3,
  set: blogTitleLens_set$3
};

function blogBodyLens_get$3(values) {
  return values.body;
}

function blogBodyLens_set$3(value, values) {
  return {
          id: values.id,
          title: values.title,
          body: value
        };
}

var blogBodyLens$3 = {
  get: blogBodyLens_get$3,
  set: blogBodyLens_set$3
};

function stateBlogsLens_get$3(values) {
  return values.blogs;
}

function stateBlogsLens_set$3(value, values) {
  return {
          blogs: value,
          currentBlog: values.currentBlog
        };
}

var stateBlogsLens$3 = {
  get: stateBlogsLens_get$3,
  set: stateBlogsLens_set$3
};

function stateCurrentBlogLens_get(values) {
  return values.currentBlog;
}

function stateCurrentBlogLens_set(value, values) {
  return {
          blogs: values.blogs,
          currentBlog: value
        };
}

var stateCurrentBlogLens = {
  get: stateCurrentBlogLens_get,
  set: stateCurrentBlogLens_set
};

var currentBlog = {
  TAG: /* Ok */0,
  _0: {
    id: 0,
    title: "Ok Title",
    body: "body"
  }
};

var state_blogs = [];

var state$3 = {
  blogs: state_blogs,
  currentBlog: currentBlog
};

console.log("\n\n\n---- Result ----");

var currentBlogTitleLens = Pancake.Infix.$great$great$neg(Pancake.Result.orExn(stateCurrentBlogLens), blogTitleLens$3);

console.log("\n---- View / Update title for current blog within Result:");

console.log(Pancake.view(currentBlogTitleLens, state$3));

console.log(Pancake.set(currentBlogTitleLens, "New Title", state$3));

var state_blogs$1 = [];

var state_currentBlog = {
  TAG: /* Error */1,
  _0: "Fubar"
};

var state$4 = {
  blogs: state_blogs$1,
  currentBlog: state_currentBlog
};

var currentBlogTitleLensFallback = Pancake.Infix.$great$great$neg(Pancake.Result.orElse({
          id: 0,
          title: "Fallback Title",
          body: "Fallback Body"
        }, stateCurrentBlogLens), blogTitleLens$3);

console.log("\n---- View / Update / Over title for current blog within Result in error state with fallback:");

console.log(Pancake.view(currentBlogTitleLensFallback, state$4));

console.log(Pancake.set(currentBlogTitleLensFallback, "Title updated from fallback", state$4));

console.log(Pancake.over(currentBlogTitleLensFallback, (function (prim) {
            return prim.toUpperCase();
          }), state$4));

var Result = {
  blogIdLens: blogIdLens$3,
  blogTitleLens: blogTitleLens$3,
  blogBodyLens: blogBodyLens$3,
  stateBlogsLens: stateBlogsLens$3,
  stateCurrentBlogLens: stateCurrentBlogLens,
  currentBlog: currentBlog,
  currentBlogTitleLens: currentBlogTitleLens,
  state: state$4,
  currentBlogTitleLensFallback: currentBlogTitleLensFallback
};

exports.List = List;
exports.$$Array = $$Array;
exports.$$Option = $$Option;
exports.Result = Result;
/*  Not a pure module */