import { InlineMath, BlockMath } from 'react-katex';

const Chapter4Countability = () => {
  return (
    <div className="p-6 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Chapter 4: Countability</h2>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4.1 Introduction to Countability</h3>
        <p className="mb-4">
          <strong>What is countability?</strong>
        </p>
        <p className="mb-4">
          Countability is a way of describing the "size" of a set. More specifically, it tells us if
          the elements in a set can be paired, or matched one-to-one, with the natural numbers{' '}
          <InlineMath math="\mathbb{N}" /> (i.e., the numbers 1, 2, 3, and so on). If we can make
          such a pairing, the set is <strong>countable</strong>. If we cannot, the set is{' '}
          <strong>uncountable</strong>.
        </p>
        <hr className="my-6" />

        <h4 className="text-lg font-medium mb-2">Visualizing Countability</h4>
        <p className="mb-4">
          Imagine you have a bunch of objects (like balls) and you want to count them. If you can
          assign each ball a number from 1, 2, 3, and so on, without missing any balls, you say the
          set is countable. This works for finite sets as well as infinite sets, like the natural
          numbers.
        </p>
        <p className="mb-4">
          On the other hand, for an <strong>uncountable</strong> set, imagine you have so many balls
          that you can never finish counting them in a complete sequence. That’s the situation with
          certain infinite sets, like the real numbers between 0 and 1.
        </p>
      </section>
      <hr className="my-6" />

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">4.2 Definitions and Basic Examples</h3>

        <h4 className="text-lg font-medium mb-2">Countable Sets</h4>
        <p className="mb-4">
          A set is <strong>countable</strong> if you can list its elements in a sequence, even if
          the set is infinite. In other words, there’s a way to “count” the elements, like numbers
          on a number line.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Finite Sets:</strong> These are trivially countable because you can count all
            the elements in the set. For example, the set{' '}
            <InlineMath math="A = \{1, 2, 3\}" /> is countable because you can simply count the 3
            elements: 1, 2, 3.
          </li>
          <li>
            <strong>The Natural Numbers (<InlineMath math="\mathbb{N}" />):</strong> The set of all
            natural numbers, <InlineMath math="\mathbb{N} = \{1, 2, 3, \dots\}" />, is countable
            because you can list them one by one: 1, 2, 3, and so on, forever.
          </li>
          <li>
            <strong>The Integers (<InlineMath math="\mathbb{Z}" />):</strong> The set of all
            integers <InlineMath math="\{ \dots, -2, -1, 0, 1, 2, \dots \}" /> is also countable.
            You can pair them with <InlineMath math="\mathbb{N}" /> like this:{' '}
            <InlineMath math="1 \to 0, 2 \to 1, 3 \to -1, 4 \to 2, 5 \to -2, \dots" />. This shows
            there’s a way to list all integers.
          </li>
        </ul>
        <hr className="my-6" />

        <h4 className="text-lg font-medium mb-2">Uncountable Sets</h4>
        <p className="mb-4">
          Some sets are too large to list in a sequence. These are called <strong>uncountable</strong>.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>The Real Numbers (<InlineMath math="\mathbb{R}" />):</strong> The real numbers
            between 0 and 1, such as 0.1, 0.123, 0.12345, etc., are{' '}
            <strong>uncountable</strong> because between any two real numbers, there are infinitely
            many more. You can never finish counting them.
          </li>
        </ul>
      </section>
      <hr className="my-6" />

      <h3 className="text-xl font-bold mb-4">4.3 Countability of Cartesian Products</h3>
      <p className="mb-4">
        The <strong>Cartesian product</strong> is a way to combine two sets into a new set of ordered pairs. The Cartesian product of two sets <InlineMath math="A \times B" />, and it consists of all possible pairs <InlineMath math="(a, b)" />, where <InlineMath math="a" /> is from set <InlineMath math="A" /> and <InlineMath math="b" /> is from set <InlineMath math="B" />.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Example: <InlineMath math="\mathbb{N} \times \mathbb{N}" /></h3>
      <p className="mb-4">
        Consider the set <InlineMath math="\mathbb{N} \times \mathbb{N}" />, which is the set of all pairs of natural numbers:
      </p>
      <p className="mb-4">
        <InlineMath math="{(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), \dots}" />
      </p>
      <p className="mb-4">
        Even though this set seems infinite, we can list all its elements in a sequence. Here’s how we can do it:
      </p>
      <ol>
        <li>Start with the pair (1, 1).</li>
        <li>Then the next pair is (1, 2), then (1, 3).</li>
        <li>After that, move to the next "row" and list (2, 1), (2, 2), (2, 3), and so on.</li>
      </ol>
      <p className="mb-4">
        This method shows that the Cartesian product <InlineMath math="\mathbb{N} \times \mathbb{N}" /> is countable because we can list all pairs systematically.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Visualizing with a Grid</h3>
      <p className="mb-4">
        A helpful way to visualize this is by imagining a grid where the rows represent the first element of the pair, and the columns represent the second element. For example:
      </p>
      <pre className="bg-gray-100 p-4 rounded">
        (1,1) (1,2) (1,3) ... <br />
        (2,1) (2,2) (2,3) ... <br />
        (3,1) (3,2) (3,3) ... <br />
        ⋱
      </pre>
      <p className="mb-4">
        You can see that you can list all the pairs in a zigzag pattern, like a "diagonal path."
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-bold mb-4">4.4 Rational Numbers are Countable</h3>
      <p className="mb-4">
        The set of rational numbers <InlineMath math="\mathbb{Q}" />, which includes all fractions like <InlineMath math="\frac{1}{2}" />, <InlineMath math="\frac{3}{4}" />, <InlineMath math="\frac{-7}{5}" />, <InlineMath math="\frac{2}{1}" />, <InlineMath math="\frac{4}{3}" />, <InlineMath math="\frac{5}{-7}" />, might seem uncountable because between any two rationals, there’s another one. However, they are <strong>countable</strong>!
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Example: Listing Rational Numbers</h3>
      <p className="mb-4">
        We can list all the rational numbers in a systematic way. One way to do this is by pairing each rational number <InlineMath math="\frac{p}{q}" /> (in lowest terms) with a unique pair of integers <InlineMath math="(p, q)" />. Since both <InlineMath math="\mathbb{Z}" /> (the integers) and <InlineMath math="\mathbb{N}" /> (the natural numbers) are countable, their product <InlineMath math="\mathbb{Z} \times \mathbb{N}" /> is also countable, so the rational numbers are countable too.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Visualizing with a Grid</h3>
      <p className="mb-4">
        Similar to the Cartesian product of <InlineMath math="\mathbb{N}" />, you can visualize the rationals by organizing them in a grid. The rows could represent the numerator and the columns the denominator. Then, just like with the integers, you can move diagonally across the grid to list all the rational numbers.
      </p>
      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">4.5 Unions of Countable Sets</h2>
      <p className="mb-4">What happens when you combine countable sets? Are their unions still countable?</p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Countable Union of Countable Sets</h3>
      <p className="mb-4">
        If you take countable sets <InlineMath math="A_1, A_2, A_3, \dots" />, their union <InlineMath math="A_1 \cup A_2 \cup A_3 \cup \dots" /> will also be countable. This is because even though you're combining infinitely many sets, you can still create a way to list all their elements.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Visualizing the Union</h3>
      <p className="mb-4">
        Imagine each set <InlineMath math="A_n" /> as a row of objects:
      </p>
      <pre className="bg-gray-100 p-4 rounded">
        <InlineMath math="A₁ = {1, 2, 3}, A₂ = {4, 5, 6}, A₃ = {7, 8, 9}, ..."/> <br />
        You can list all the elements by going across rows like this: <br />
        1, 2, 3, 4, 5, 6, 7, 8, 9, ...
      </pre>
      <p className="mb-4">
        The entire union is countable because you're still able to list the elements in a sequence.
      </p>
      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">4.6 Not All Sets Are Countable!</h2>
      <p className="mb-4">Now, we arrive at one of the most fascinating results: <strong>not all sets are countable</strong>. The set of real numbers between 0 and 1 is an example of an uncountable set.</p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Cantor’s Diagonal Argument</h3>
      <p className="mb-4">
        Cantor showed that the real numbers between 0 and 1 cannot be counted, no matter how hard we try. Here's the core idea:
      </p>
      <ol>
        <li>Assume we can list all real numbers between 0 and 1.</li>
        <li>Each real number has an infinite decimal expansion, like <InlineMath math="0.123456..." />.</li>
        <li>Construct a new number by changing the diagonal digits of each number in the list (e.g., if the first number has a 1, change it to a 2, and so on).</li>
        <li>The new number will differ from every number in the list at least at one digit, so it’s not in the list. This contradicts the assumption that the set of real numbers is countable.</li>
      </ol>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mb-2">Visualizing with a Table</h3>
      <pre className="bg-gray-100 p-4 rounded">
        0.123456... <br />
        0.987654... <br />
        0.567890... <br />
        ⋮
      </pre>
      <p className="mb-4">
        Cantor’s argument shows that there is no way to list all real numbers, because you can always construct a new number that is not in the list.
      </p>
      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
      <p className="mb-4">
        Countability is a way to describe the "size" of sets, whether they are finite or infinite. While some infinite sets can be counted, like the natural numbers, others, like the real numbers, cannot be. By understanding concepts like <strong>countable sets</strong>, <strong>uncountable sets</strong>, and <strong>Cartesian products</strong>, we get a deeper understanding of how we deal with infinity and organize sets.
      </p>
    </div>
  )};

export default Chapter4Countability;