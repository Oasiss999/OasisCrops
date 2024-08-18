import requests

def get_temp():
    url = 'http://99.167.197.209:5001/Display_Text'

    try:
        response = requests.get(url)
        if response.status_code == 200:
            posts = response.json()
            return posts.get("temperature")
        else:
            print('Error:', response.status_code)
            return None
    except requests.exceptions.RequestException as e:
        print('Error:', e)
        return None

def get_moisture():
    url = 'http://99.167.197.209:5001/Display_Text'

    try:
        response = requests.get(url)
        if response.status_code == 200:
            posts = response.json()
            return posts.get("moisture")
        else:
            print('Error:', response.status_code)
            return None
    except requests.exceptions.RequestException as e:
        print('Error:', e)
        return None