from bs4 import BeautifulSoup

def main():
    doc = """<html><body>
    <article>
        <h1>Title</h1>
        <ul>
            <li>One</li>
            <li>Two</li>
        </ul>
    </article>
    </body>
    </html>
    """
    soup = BeautifulSoup(doc, 'html.parser')
    print('KEY:', soup.article.ul.li.string)

    try:
        print('Distractor 1:', soup.article.ul.li[0].string)
    except KeyError as ex:
        print('Distractor 1 runtime crash: KeyError', ex)

    print('Distractor 2:', soup.get('html.body.article.ul.li[0]'))

    print('Distractor 3:', soup.select('html body article ul li:first-child'))


if __name__ == '__main__':
    main()
