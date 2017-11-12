FROM nginx:alpine
MAINTAINER Bharat Khatri <bharat.khatri@rapyuta-robotics.com>

ARG DOCS_ROOT=latest 

RUN chown -R root:root /var/cache/nginx \
	&& chmod -R g+w /var/log/nginx /var/cache/nginx /var/run

COPY _preview/rapyuta-io/${DOCS_ROOT} /usr/share/nginx/html/${DOCS_ROOT}/

RUN sed -i'' "s/listen *80/listen 8000/" /etc/nginx/conf.d/default.conf \
	&& sed -i'' "s/#error_page *404 *\/404.html;/&\n\n    location = \/ {\n        return 302 ${DOCS_ROOT}\/overview\/introduction.html;\n    }/" /etc/nginx/conf.d/default.conf
