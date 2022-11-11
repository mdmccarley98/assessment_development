"""
Reference code only to demonstrate the described scenario.

Typical values are from 93% at 15 trees to 95.1% accuracy at 150 trees.
"""

from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import zero_one_loss
from scipy.io import loadmat

if __name__ == '__main__':
    # Dataset widely available, for example:
    # https://github.com/amplab/datascience-sp14/blob/master/lab7/mldata/mnist-original.mat
    mat = loadmat('./data/mnist-original.mat')
    X = mat['data'].T
    y = mat['label'][0]    
    X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=10000, stratify=y)    
    clf = RandomForestClassifier(warm_start=True, max_leaf_nodes=2000, n_jobs=7)
    scores = []
    for n_estimators in range(1, 151):
        clf.set_params(n_estimators=n_estimators)
        clf.fit(X_train, y_train)
        score = dict(
            n_estimators=n_estimators,
            train=zero_one_loss(clf.predict(X_train), y_train), 
            test=zero_one_loss(clf.predict(X_test), y_test))
        scores.append(score)
        print(score)