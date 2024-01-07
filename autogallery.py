"""
Python script to automatically make yaml file with data for all images in photography directory
"""

from os import walk
import yaml


def get_images(directory):
    """
    Returns a list of image filenames found in the specified directory.

    Returns:
        list: A list of image filenames.
    """
    files = []

    for (dirpath, dirnames, filenames) in walk(directory):
        files.extend(filenames)
        break

    return files


def get_names(files):
    """
    Returns a list of image names with capitalized first letters found in the specified directory.

    Returns:
        list: A list of image names.
    """
    names = []

    for file in files:
        name = file.split('.')[0]
        names.append(name.capitalize())

    return names


def make_pairs(titles, paths, folder):
    """
    Create a list of dictionaries representing image pairs.

    Args:
        titles (list): A list of image titles.
        paths (list): A list of image paths.

    Returns:
        list: A list of dictionaries, where each dictionary contains a 'title' key 
        representing the image title and a 'path' key representing the image path.
    """
    pairs = []

    for title, path in zip(titles, paths):
        pairs.append(dict(title = title, path = "/" + folder + "/" + path))

    return pairs


FOLDER = 'assets/images/photography'
images = get_images(FOLDER)
names = get_names(images)
pairs = make_pairs(names, images, FOLDER)
OUTPUT = '_data/photos.yml'


with open(OUTPUT, 'w', encoding="UTF-8") as yml:
    yaml.dump(pairs, yml, default_flow_style=False)
