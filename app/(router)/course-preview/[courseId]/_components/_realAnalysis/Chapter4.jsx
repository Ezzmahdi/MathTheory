import { InlineMath } from 'react-katex';

export default function ArchimedeanProperty() {
  return (
    <div className="prose lg:prose-xl p-6">
      <h3 className="text-2xl font-semibold mt-4">Chapter 4: The Archimedean Property and Supremum</h3>
      <hr className="my-6" />

      <h4 className="text-xl font-semibold mt-6">The Archimedean Property</h4>
      <p>
        The <strong>Archimedean Property</strong> is a fundamental concept in real analysis. It essentially states that no
        matter how large a number is, we can always find a multiple of a smaller number that exceeds it. This is a key
        characteristic of the real numbers.
      </p>
      <p>
        To break it down, if we have two positive real numbers <InlineMath math="x" /> and <InlineMath math="y" />, there
        always exists a natural number <InlineMath math="n" /> such that:
      </p>
      <p className="text-center">
        <InlineMath math="n \cdot x > y" />
      </p>
      <p>
        This means that as we keep multiplying <InlineMath math="x" /> by larger and larger natural numbers, we will
        eventually surpass <InlineMath math="y" />. For example, if <InlineMath math="x = 1" /> and <InlineMath math="y =
        100" />, we can find a natural number <InlineMath math="n = 101" />, such that <InlineMath math="101 \cdot 1 =
        101" />, which is greater than 100.
      </p>
      <p>
        This property is essential for understanding the behavior of real numbers and helps establish many other important
        concepts in analysis, such as the idea of supremums (least upper bounds).
      </p>
      <hr className="my-6" />

      <h4 className="text-xl font-semibold mt-6">Proof by Contradiction: Archimedean Property</h4>
      <p>
        Let’s now consider how we can prove that the collection of all multiples of a number <InlineMath math="x" /> is
        eventually larger than any number <InlineMath math="y" /> in the real numbers. This will demonstrate the
        Archimedean Property in action.
      </p>

      <h5 className="text-lg font-semibold mt-6">Claim</h5>
      <p>
        For any positive real numbers <InlineMath math="x" /> and <InlineMath math="y" />, there exists a natural number
        <InlineMath math="n" /> such that <InlineMath math="n \cdot x > y" />.
      </p>
      <p>We will prove this by <strong>contradiction</strong>.</p>
      <ol className="list-decimal ml-8">
        <li>
          <strong>Assume the opposite</strong>: Suppose the claim is false. This means that no matter how large <InlineMath math="n" /> is,
          <InlineMath math="n \cdot x" /> will never exceed <InlineMath math="y" />. In other words, <InlineMath math="n \cdot x \leq y" /> for all <InlineMath math="n \in \mathbb{N}" />.
        </li>
        <li>
          <strong>Interpretation</strong>: If this assumption were true, then the set of multiples of <InlineMath math="x" />, which we can write as <InlineMath math="A = \{n \cdot x \mid n \in \mathbb{N}\}" />, would be
          <strong>bounded above</strong> by <InlineMath math="y" />.
        </li>
        <li>
          <strong>Least Upper Bound (LUB)</strong>: If the set of multiples of <InlineMath math="x" /> is bounded above, by the
          <strong>Least Upper Bound Property</strong> of the real numbers, this set must have a <strong>supremum</strong> (the least upper bound). Let’s call this supremum <InlineMath math="\alpha" />. Thus, we have:
        </li>
      </ol>
      <p className="text-center">
        <InlineMath math="\alpha = \sup A" />
      </p>
      <p>
        This means that <InlineMath math="\alpha" /> is the smallest number that is greater than or equal to all the multiples of
        <InlineMath math="x" />.
      </p>
      <ol className="list-decimal ml-8">
        <li>
          <strong>Contradiction</strong>: Now, let’s analyze the properties of <InlineMath math="\alpha" />. Since <InlineMath math="\alpha" /> is the least upper bound of the set <InlineMath math="A" />, it cannot be surpassed by any element of <InlineMath math="A" />. However, consider <InlineMath math="\alpha - x" />. Since <InlineMath math="x" /> is positive, <InlineMath math="\alpha - x" /> must be smaller than <InlineMath math="\alpha" />. But, by the properties of the supremum, <InlineMath math="\alpha - x" /> <strong>cannot</strong> be an upper bound for <InlineMath math="A" />, because <InlineMath math="\alpha" /> is the least upper bound.
        </li>
        <li>
          This means there must be a multiple of <InlineMath math="x" />, say <InlineMath math="m \cdot x" />, such that:
        </li>
      </ol>
      <p className="text-center">
        <InlineMath math="\alpha - x < m \cdot x \leq \alpha" />
      </p>
      <p>
        This implies that:
      </p>
      <p className="text-center">
        <InlineMath math="\alpha < (m + 1) \cdot x" />
      </p>
      <p>
        But this is a contradiction because we assumed that <InlineMath math="\alpha" /> was the least upper bound, meaning that no
        multiple of <InlineMath math="x" /> should be greater than <InlineMath math="\alpha" />.
      </p>
      <p>
        Thus, our assumption that <InlineMath math="n \cdot x \leq y" /> for all <InlineMath math="n" /> must be false. Therefore,
        there must exist a natural number <InlineMath math="n" /> such that <InlineMath math="n \cdot x > y" />. This completes the
        proof of the Archimedean Property.
      </p>
      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mt-8">Rational Numbers and the Archimedean Property</h3>
      <p>
        An important consequence of the Archimedean Property is that the <strong>rational numbers are dense in the real numbers</strong>. This means that between any two real numbers, no matter how close they are, there always exists a rational number.
      </p>
      <p>
        To prove this, let’s consider two real numbers <InlineMath math="x" /> and <InlineMath math="y" />, where <InlineMath math="x < y" />. We want to show that there exists a rational number <InlineMath math="q" /> such that:
      </p>
      <p className="text-center">
        <InlineMath math="x < q < y" />
      </p>

      <h4 className="text-xl font-semibold mt-6">Proof:</h4>
      <ol className="list-decimal ml-8">
        <li>
          <strong>Distance between <InlineMath math="x" /> and <InlineMath math="y" />:</strong> Consider the difference <InlineMath math="y - x" />. Since <InlineMath math="x < y" />, this difference is a positive real number.
        </li>
        <li>
          <strong>Using the Archimedean Property:</strong> By the Archimedean Property, we can find a natural number <InlineMath math="n" /> such that:
          <p className="text-center">
            <InlineMath math="\frac{1}{n} < y - x" />
          </p>
          This step uses the fact that we can always find a sufficiently small fraction <InlineMath math="\frac{1}{n}" /> that is smaller than the difference <InlineMath math="y - x" />.
        </li>
        <li>
          <strong>Multiplying by <InlineMath math="n" />:</strong> Now, consider the multiples of <InlineMath math="\frac{1}{n}" />, i.e., <InlineMath math="\frac{1}{n}, \frac{2}{n}, \frac{3}{n}, \dots" />. These multiples will eventually exceed <InlineMath math="x" />, since they are unbounded by the Archimedean Property. Let’s pick the smallest multiple, say <InlineMath math="m \cdot \frac{1}{n}" />, that is greater than <InlineMath math="x" />. This gives:
          <p className="text-center">
            <InlineMath math="\frac{m}{n} > x" />
          </p>
        </li>
        <li>
          <strong>Ensuring <InlineMath math="\frac{m}{n} < y" />:</strong> Now, we need to show that <InlineMath math="\frac{m}{n} < y" />. If <InlineMath math="\frac{m}{n} \geq y" />, then we would have:
          <p className="text-center">
            <InlineMath math="\frac{m}{n} \geq y" />
          </p>
          However, this would imply that the distance between <InlineMath math="\frac{m}{n}" /> and <InlineMath math="\frac{m-1}{n}" /> is <InlineMath math="\frac{1}{n}" />, and the difference between <InlineMath math="x" /> and <InlineMath math="y" /> is less than <InlineMath math="\frac{1}{n}" />, which is a contradiction. Therefore, <InlineMath math="\frac{m}{n} < y" />.
        </li>
      </ol>
      <p>
        Thus, we have found a rational number <InlineMath math="q = \frac{m}{n}" /> such that:
      </p>
      <p className="text-center">
        <InlineMath math="x < q < y" />
      </p>
      <p>This shows that rational numbers are <strong>dense in the real numbers</strong>.</p>
      <hr className="my-6" />

      <h3 className="text-2xl font-semibold mt-8">Properties of Supremum</h3>
      <p>
        The concept of <strong>supremum</strong> (least upper bound) is crucial in real analysis, especially when dealing with sets of real numbers. Here are some important properties of supremums that will help in understanding their behavior:
      </p>
      <ol className="list-decimal ml-8">
        <li>
          <strong>Upper Bound and Supremum:</strong> If <InlineMath math="\gamma" /> is an upper bound of a set <InlineMath math="A" />, then:
          <p className="text-center">
            <InlineMath math="\sup A \leq \gamma" />
          </p>
          This follows from the definition of the supremum as the least upper bound.
        </li>
        <li>
          <strong>Supremum and Bounds:</strong> If for every element <InlineMath math="a \in A" />, we have <InlineMath math="a \leq \gamma" />, then <InlineMath math="\gamma" /> is an upper bound, and consequently:
          <p className="text-center">
            <InlineMath math="\sup A \leq \gamma" />
          </p>
        </li>
        <li>
          <strong>Strict Inequality:</strong> If <InlineMath math="\gamma < \sup A" />, then there must exist an element <InlineMath math="a \in A" /> such that:
          <p className="text-center">
            <InlineMath math="\gamma < a \leq \sup A" />
          </p>
          This implies that for any number strictly smaller than the supremum, there is an element in the set that exceeds it.
        </li>
        <li>
          <strong>Supremum of a Subset:</strong> If <InlineMath math="A \subseteq B" />, then:
          <p className="text-center">
            <InlineMath math="\sup A \leq \sup B"/>
          </p>
          This property indicates that the supremum of a subset is less than or equal to the supremum of the entire set.
        </li>
        <li>
          <strong>Equality of Supremums:</strong> If <InlineMath math="\sup A = \sup B" />, then for every element <InlineMath math="a \in A" />, there exists an element <InlineMath math="b \in B" /> such that <InlineMath math="a \leq b" />, and vice versa. This can be shown using the properties of upper bounds and supremums.
          <p className="text-center">
            <InlineMath math="\sup A = \sup B" />
          </p>
          <p className="text-center">
            <InlineMath math="a \in A, b \in B, a \leq b"/>
          </p>
        </li>
      </ol>

      <hr className="my-6" />

      <p className='text-center'>This format and level of detail should help make the concepts much clearer and provide a better understanding of the Archimedean Property, supremum, and their applications in real analysis.</p>
    </div>
  );
}
