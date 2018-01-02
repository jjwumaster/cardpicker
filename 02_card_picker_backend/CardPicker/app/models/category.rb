class Category < ApplicationRecord

  # maybe move all this to the seed file? or other central repository
  # because we need to seed the entire database with categories anyway

  @@output = {
        '4bf58dd8d48988d1f9941735' => "grocery",
        '4bf58dd8d48988d113951735' => "gas",
        '4d4b7105d754a06374d81259' => "restaurant",
        '4d4b7105d754a06376d81259' => "restaurant",
        '54f4ba06498e2cf5561da814' => "restaurant",
        '5665c7b9498e7d8a4f2c0f06' => "restaurant",
        '4d4b7104d754a06370d81259' => "entertainment",
        '5267e4d9e4b0ec79466e48d1' => "entertainment",
        '5267e4d9e4b0ec79466e48c7' => "entertainment",
        '4f04afc02fb6e1c99f3db0bc' => "business",
        '4bf58dd8d48988d121951735' => "business",
        '52f2ab2ebcbc57f1066b8b28' => "business",
        '52f2ab2ebcbc57f1066b8b1f' => "business",
        '4f04b08c2fb6e1c99f3db0bd' => "air",
        '4bf58dd8d48988d1fa931735' => "hotel",
        '4bf58dd8d48988d1ef941735' => "car",
        '4bf58dd8d48988d12d951735' => "travel",
        '4bf58dd8d48988d1fe931735' => "travel",
        '52f2ab2ebcbc57f1066b8b4f' => "travel",
        '52f2ab2ebcbc57f1066b8b50' => "travel",
        '55077a22498e5e9248869ba2' => "travel",
        '4bf58dd8d48988d1f6931735' => "travel",
        '4bf58dd8d48988d1fc931735' => "travel",
        '4bf58dd8d48988d1fd931735' => "travel",
        '53fca564498e1a175f32528b' => "travel",
        '4bf58dd8d48988d130951735' => "travel",
        '52f2ab2ebcbc57f1066b8b4d' => "travel",
        '52f2ab2ebcbc57f1066b8b4e' => "travel",
        '4bf58dd8d48988d129951735' => "travel",
        '52f2ab2ebcbc57f1066b8b51' => "travel",
        '54541b70498ea6ccd0204bff' => "travel",
        '52f2ab2ebcbc57f1066b8b4a' => "travel",
      }

  def self.output
    @@output
  end

  def self.categorize
    fs_cats = self.get_categories["response"]["categories"]
    self.cat_two(fs_cats, @@output)
  end

# I tried a recursive algorithm here and failed...instead there's this simple depth-first searcher below:

  def self.cat_two(target, reference)
    stack = target # array of all the top-level nodes

    loop do
      curr_node = stack.pop # take the first node in the stack

      return @@output if curr_node == nil # exit the loop if we deplete the stack

      if @@output[curr_node["id"]] # if we've categorized this candidate --> make sure all its children also get categorized
        unless curr_node["categories"].empty? # if this is the bottom of the tree
          curr_node["categories"].each do |category| # take all the child nodes
            @@output[category["id"]] = @@output[curr_node["id"]] # set each of their categories
            stack << category # add all the children to the stack so we make sure to go through them
          end
        end
      else # if we haven't categorized this candidate
        @@output[curr_node["id"]] = "other" # set it to other
        stack += curr_node["categories"] # add all its children to the stack (they might be matches)
      end
    end
  end

  def self.get_categories
    response = RestClient.get(
      "https://api.foursquare.com/v2/venues/categories?client_id=#{FOURSQUARE_CLIENT_ID}&client_secret=#{FOURSQUARE_CLIENT_SECRET}&v=#{DateTime.now.strftime('%Y%m%d')}"
    )
    JSON.parse(response)
  end

end
