FROM node


RUN mkdir /usr/src/app

COPY . /usr/src/app


#also say
WORKDIR /usr/src/app

#copy the react to the container
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN yarn

CMD ["npm", "start"]

