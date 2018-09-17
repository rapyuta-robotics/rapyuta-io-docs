require 'rack-livereload'

# Use LiveReload Rack middleware 
use Rack::LiveReload, min_delay: 1000, max_delay: 300_000, live_reload_port: 35729, ignore: []
# Serve the '_preview' directory
run Rack::Directory.new('./_preview') 

