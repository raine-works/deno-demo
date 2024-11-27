FROM ubuntu:23.10 AS runner
WORKDIR /app
ARG PORT \
    ORIGIN \
    STACK \
    VERSION
ENV LOG_LEVEL="info" \
    NODE_ENV="production" \
    PORT=${PORT} \
    ORIGIN=${ORIGIN} \
    STACK=${STACK} \
    TZ="UTC" \
    VERSION=${VERSION}
RUN groupadd -g 1001 deno_group
RUN useradd -u 1001 -g deno_group -s /bin/bash -m deno_user
COPY ./server/.build/server ./server
USER deno_user
EXPOSE ${PORT}
ENTRYPOINT ["/app/server"]