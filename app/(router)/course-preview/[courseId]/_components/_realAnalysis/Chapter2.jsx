import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function RationalNumbersProperties() {
  return (
    <div className="prose max-w-none mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Chapter 2: The Rational Numbers and Their Properties</h2>

      <h3 className="text-xl font-semibold mb-2">Introduction to Rational Numbers and Their Order</h3>
      <p>
        In this chapter, we explore the rational numbers, denoted as <InlineMath math="\mathbb{Q}" />, and their various properties, including their order and how they help us solve mathematical problems. Rational numbers are all numbers that can be expressed as a fraction, where both the numerator and denominator are integers, and the denominator is not zero. This set includes numbers such as 0, 1, -1, <InlineMath math="\frac{1}{2}" />, <InlineMath math="\frac{3}{4}" />, and so on. To make things more interesting, we'll use some colors here to highlight important concepts.
      </p>
      <p>
        Consider the numbers <InlineMath math="0" />, <InlineMath math="1" />, <InlineMath math="2" />, and others in a specific order. For example, <InlineMath math="\frac{12}{12}" /> is less than <InlineMath math="\frac{13}{13}" />, so it belongs here in the list, and we can observe that <InlineMath math="\frac{1}{4}" /> lies between <InlineMath math="0" /> and <InlineMath math="1" /> in the order. Similarly, numbers like <InlineMath math="\frac{54}{2}" /> and <InlineMath math="-\frac{43}{1}" /> fit into this structure. There are, of course, infinitely many rational numbers between any two numbers, and we will explore this idea further in upcoming lectures.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">Using Rational Numbers to Solve Practical Problems</h3>
      <p>
        Now, let's see how the rational numbers help solve real-world problems. Suppose you have three cakes and want to divide them equally among five people. How much cake does each person get? This is a typical division problem that can be modeled by the equation:
      </p>
      <BlockMath math="3x = 5" />
      <p>
        Solving this equation for <InlineMath math="x" />, we find that <InlineMath math="x = \frac{3}{5}" />, which is a rational number. This shows that fractions, like <InlineMath math="\frac{3}{5}" />, are useful for dividing things equally, and this is just one example where rational numbers are essential.
      </p>
      <p>
        By using the cross-multiplication rule learned in basic arithmetic, we can see that multiplying both sides of the equation by 5 results in:
      </p>
      <BlockMath math="x = \frac{3}{5}" />

      <h3 className="text-xl font-semibold mt-6 mb-2">The Limitations of Rational Numbers</h3>
      <p>
        While the rational numbers are very useful, they do not always solve every equation. For instance, consider the equation:
      </p>
      <BlockMath math="x^2 = 2" />
      <p>
        We claim that there is no rational solution to this equation. To prove this, we use a classic proof by contradiction. The idea behind a proof by contradiction is that we assume the opposite of what we want to prove and show that this assumption leads to a contradiction, which means the original assumption must be true.
      </p>

      <h4 className="text-lg font-semibold mt-4">Proof by Contradiction</h4>
      <p>
        We begin by assuming that there exists a rational solution to the equation <InlineMath math="x^2 = 2" />. Since we are assuming the solution is rational, we can write it as a fraction:
      </p>
      <BlockMath math="x = \frac{p}{q}" />
      <p>
        where <InlineMath math="p" /> and <InlineMath math="q" /> are integers with no common factors (this is called "lowest terms"). Squaring both sides, we get:
      </p>
      <BlockMath math="x^2 = \left( \frac{p}{q} \right)^2 = \frac{p^2}{q^2} = 2" />
      <p>
        This simplifies to:
      </p>
      <BlockMath math="p^2 = 2q^2" />
      <p>
        At this point, we observe that <InlineMath math="p^2" /> is divisible by 2. This implies that <InlineMath math="p" /> itself must be divisible by 2 (since if a square is divisible by 2, the number itself must be divisible by 2). So, let:
      </p>
      <BlockMath math="p = 2m" />
      <p>
        for some integer <InlineMath math="m" />. Substituting this back into the equation <InlineMath math="p^2 = 2q^2" />, we get:
      </p>
      <BlockMath math="(2m)^2 = 2q^2 \quad \Rightarrow \quad 4m^2 = 2q^2 \quad \Rightarrow \quad 2m^2 = q^2" />
      <p>
        Now, <InlineMath math="q^2" /> is divisible by 2, which means that <InlineMath math="q" /> must also be divisible by 2. But this contradicts our original assumption that <InlineMath math="p" /> and <InlineMath math="q" /> have no common factors (since both are divisible by 2). Therefore, the assumption that there is a rational solution must be false.
      </p>
      <p>
        Thus, <InlineMath math="x^2 = 2" /> has no solution in the rational numbers <InlineMath math="\mathbb{Q}" />. This demonstrates that the rational numbers are not complete enough to solve all equations, such as the square root of 2.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">The Structure of the Rational Numbers</h3>
      <p>
        The rational numbers form a mathematical structure known as a <em>field</em>. A field is a set with two operations, usually called addition and multiplication, that satisfy several properties. These properties are essential for ensuring that rational numbers behave consistently under arithmetic operations.
      </p>
      <p>
        For the rational numbers <InlineMath math="\mathbb{Q}" />, the following properties hold:
      </p>
      <ol className="list-decimal list-inside my-4">
        <li>
          <strong>Closure</strong>: Adding or multiplying two rational numbers always results in another rational number.
        </li>
        <li>
          <strong>Commutativity</strong>: The order in which you add or multiply numbers does not change the result (e.g., <InlineMath math="a + b = b + a" /> and <InlineMath math="a \times b = b \times a" />).
        </li>
        <li>
          <strong>Associativity</strong>: Grouping numbers in different ways does not change the result (e.g., <InlineMath math="(a + b) + c = a + (b + c)" />).
        </li>
        <li>
          <strong>Additive Identity</strong>: There is a number, 0, such that <InlineMath math="a + 0 = a" /> for any rational number <InlineMath math="a" />.
        </li>
        <li>
          <strong>Multiplicative Identity</strong>: There is a number, 1, such that <InlineMath math="a \times 1 = a" /> for any rational number <InlineMath math="a" />.
        </li>
        <li>
          <strong>Additive Inverses</strong>: For every rational number <InlineMath math="a" />, there is a number <InlineMath math="-a" /> such that <InlineMath math="a + (-a) = 0" />.
        </li>
        <li>
          <strong>Multiplicative Inverses</strong>: For every non-zero rational number <InlineMath math="a" />, there is a number <InlineMath math="\frac{1}{a}" /> such that <InlineMath math="a \times \frac{1}{a} = 1" />.
        </li>
        <li>
          <strong>Distributivity</strong>: Multiplication distributes over addition, meaning <InlineMath math="a \times (b + c) = a \times b + a \times c" />.
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-2">Conclusion: Why <InlineMath math="\mathbb{Q}" /> is Not a Field for Everything</h3>
      <p>
        While the rational numbers form a field, they are not sufficient to solve all mathematical problems. For example, the equation <InlineMath math="x^2 = 2" /> does not have a solution in <InlineMath math="\mathbb{Q}" />. This limitation of the rationals leads us to the discovery of irrational numbers, such as <InlineMath math="\sqrt{2}" />, that extend the number system and allow for the solution of equations like <InlineMath math="x^2 = 2" />.
      </p>
      <p>
        In future chapters, we will explore these numbers and expand our understanding of the real number system. For now, we can confidently say that the rationals are a rich and powerful structure, but they are not the final word in the number system.
      </p>
    </div>
  );
}

export default RationalNumbersProperties;
