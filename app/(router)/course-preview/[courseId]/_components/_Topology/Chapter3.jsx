import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Closures = () => {
  return (
    <div className="prose mx-auto p-6">
      <h2 className="text-2xl font-bold">Chapter 3: <strong>Closed Sets, Closures, and Density</strong></h2>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-4">1. <strong>Motivation</strong></h3>
      <p>
        So far, we’ve explored the foundations of topology by learning what topologies are, how to compare them, and how to use bases to describe topologies. These concepts form the skeleton of the subject. Now, we’re ready to add some flesh by studying more exciting phenomena, specifically <strong>closed sets</strong> and <strong>closures</strong>.
      </p>
      <p>
        But why do we care about closed sets and closures? Think back to when you learned about sequences in calculus. If you recall, we often talked about sequences “getting closer and closer” to a point. This idea of <strong>closeness</strong> is central to many areas of mathematics, including topology. Our journey now takes us deeper into understanding how topological spaces handle this notion of closeness, starting with closures.
      </p>
      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-4">2. <strong>Revisiting Sequence Convergence in <InlineMath math="\mathbb{R}^n" /></strong></h3>
      <p>Before diving into topological definitions, let’s revisit an old friend: sequence convergence.</p>

      <p><strong>Definition 1.1</strong>: A sequence <InlineMath math="\{x_n\}_{n=1}^\infty" /> in <InlineMath math="\mathbb{R}^n" /> is said to converge to a point <InlineMath math="x \in \mathbb{R}^n" /> if for every <InlineMath math="\varepsilon > 0" />, there exists a number <InlineMath math="N \in \mathbb{N}" /> such that for all <InlineMath math="n > N" />, <InlineMath math="x_n \in B_\varepsilon(x)" />.</p>

      <p>This simply means that after a certain point, all terms of the sequence lie within an <InlineMath math="\varepsilon" />-ball centered at <InlineMath math="x" />. In other words, the sequence eventually stays as close as we want to <InlineMath math="x" />.</p>

      <p><strong>Remark 1.2</strong>: In this context, we often talk about the <strong>tail</strong> of a sequence—what’s left after the first few terms. The definition of convergence tells us that the tail of the sequence lives entirely inside the <InlineMath math="\varepsilon" />-ball.</p>

      <p>Using the tools of topology, we can generalize this idea of convergence to other spaces and use it to define the <strong>closure</strong> of a set.</p>

      <hr className="my-6"/>

      <h3 className="text-xl font-semibold mt-4">3. <strong>Closures</strong></h3>
      <p>Let’s start by defining what we mean by the <strong>closure</strong> of a set in a topological space.</p>

      <p>
        <strong>Definition 2.1</strong>: Let <InlineMath math="(X, \mathcal{T})" /> be a topological space, and let <InlineMath math="A \subseteq X" />. The <strong>closure</strong> of <InlineMath math="A" />, denoted by <InlineMath math="\overline{A}" />, is defined as:
      </p>
      <BlockMath math="\overline{A} = \{x \in X : \text{for every open set } U \text{ containing } x, U \cap A \neq \emptyset\}." />

      <p><strong>What does this mean?</strong><br />
      A point <InlineMath math="x" /> belongs to the closure of <InlineMath math="A" /> if, no matter how "small" an open set <InlineMath math="U" /> around <InlineMath math="x" /> is, <InlineMath math="U" /> will always contain at least one point of <InlineMath math="A" />. In simpler terms, <InlineMath math="\overline{A}" /> consists of all points that are either <strong>in <InlineMath math="A" /></strong> or <strong>“close” to <InlineMath math="A" /></strong> in the sense that they cannot be separated from <InlineMath math="A" /> by an open set.
      </p>

      <hr className="my-6"/>

      <h4 className="text-lg font-semibold mt-4">3.1 <strong>Elementary Properties of Closures</strong></h4>
      <p>The closure of a set has some important properties that follow directly from its definition:</p>

      <p><strong>Proposition 2.2</strong>: Let <InlineMath math="(X, \mathcal{T})" /> be a topological space, and let <InlineMath math="A, B \subseteq X" />. Then:</p>

      <ol className="list-decimal ml-8">
        <li><InlineMath math="A \subseteq \overline{A}" /><br />Every point in <InlineMath math="A" /> is automatically in <InlineMath math="\overline{A}" />, because any open set containing a point of <InlineMath math="A" /> obviously intersects <InlineMath math="A" /> (it contains the point itself!).</li>
        <li><InlineMath math="\overline{\overline{A}} = \overline{A}" /><br />This property says that taking the closure twice doesn’t add anything new. Once you’ve found the closure of a set, that’s it—you’ve included all points that should be there.</li>
        <li><InlineMath math="\overline{A \cup B} = \overline{A} \cup \overline{B}" /><br />The closure of the union of two sets is the union of their closures. Intuitively, this makes sense because any point close to either <InlineMath math="A" /> or <InlineMath math="B" /> will be close to <InlineMath math="A \cup B" />.</li>
        <li>If <InlineMath math="X \setminus A" /> is open, then <InlineMath math="\overline{A} = A" />.<br />This means that if the complement of <InlineMath math="A" /> (everything not in <InlineMath math="A" />) is open, <InlineMath math="A" /> already contains all the points in its closure.</li>
        <li><strong>Special cases</strong>: <InlineMath math="\overline{\emptyset} = \emptyset" />, <InlineMath math="\overline{X} = X" />.<br />The closure of the empty set is empty, and the closure of the entire space <InlineMath math="X" /> is <InlineMath math="X" /> itself.</li>
      </ol>

      <hr className="my-6"/>

      <h4 className="text-lg font-semibold mt-4">3.2 <strong>Examples of Closures</strong></h4>
      <p><strong>Example 2.3</strong>: Let’s work with the usual topology on the real line, denoted by <InlineMath math="(\mathbb{R}, \mathcal{T}_{\text{usual}})" />.</p>

      <ol className="list-decimal ml-8">
        <li>The closure of an open interval <InlineMath math="(a, b)" /> is <InlineMath math="[a, b]" />. Here’s why: Every point in <InlineMath math="[a, b]" />, including <InlineMath math="a" /> and <InlineMath math="b" />, satisfies the condition of being "close" to <InlineMath math="(a, b)" />.</li>
        <li><strong>Singletons in <InlineMath math="\mathbb{R}" /></strong>: For any real number <InlineMath math="a" />, the closure of <InlineMath math="\{a\}" /> is <InlineMath math="\{a\}" />. Single points can’t be "closer" to any other points than themselves.</li>
        <li><strong>Sequences and closures</strong>: Let <InlineMath math="A = \{1/n : n \in \mathbb{N}\}" />. The closure of <InlineMath math="A" /> is <InlineMath math="A \cup \{0\}" /> because the sequence <InlineMath math="\{1/n\}" /> converges to 0.</li>
        <li>
            <p>
              <strong>In the Sorgenfrey line</strong> (a topology with a base of half-open intervals <InlineMath math="[a, b)" />), things get interesting:
            </p>
            <ul className="list-disc ml-8">
              <li>
                <InlineMath math="(a, b)" /> = <InlineMath math="[a, b)" />, but <InlineMath math="[a, b)" /> = <InlineMath math="[a, b)" />.
              </li>
              <BlockMath math="[a, b) = [a, b)" />
              <li>Even basic open sets behave strangely: they are their own closures!</li>
            </ul>
        </li>
      </ol>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold">4. <strong>Closed Sets</strong></h2>
      <p>Now that we understand closures, it’s time to define <strong>closed sets</strong>.</p>
      <p>
        <strong>Definition 3.1</strong>: A set <InlineMath math="A" /> in a topological space <InlineMath math="X" /> is called <strong>closed</strong> if its complement, <InlineMath math="X \setminus A" />, is open.
      </p>
      <p className="mt-4">
        <strong>Important Note</strong>: In topology, “closed” doesn’t necessarily mean “not open.” A set can be both closed and open (these are called <strong>clopen</strong> sets) or neither.
      </p>

      <h4 className="text-lg font-semibold mt-4">4.1 <strong>Proposition 3.2: Basic Facts about Closed Sets</strong></h4>
      <ul className="list-decimal ml-8">
        <li>
          Both <InlineMath math="X" /> and <InlineMath math="\emptyset" /> are closed.
        </li>
        <li>Finite unions of closed sets are closed.</li>
        <li>Arbitrary intersections of closed sets are closed.</li>
      </ul>

      <hr className="my-6" />

      <h3 className="text-xl font-semibold mt-4">4.2 <strong>Examples of Closed Sets</strong></h3>
      <ol className="list-decimal ml-8">
        <li>
          In <InlineMath math="(\mathbb{R}, \mathcal{T}_{\text{usual}})" />:
          <ul className="list-disc ml-6">
            <li>
              Any closed interval <InlineMath math="[a, b]" /> is a closed set.
            </li>
            <li>
              The set of all integers, <InlineMath math="\mathbb{Z}" />, is closed because its complement <InlineMath math="\mathbb{R} \setminus \mathbb{Z}" /> is open.
            </li>
          </ul>
        </li>
        <li>
          In the <strong>discrete topology</strong>, every set is both open and closed. Why? Because all subsets have open complements.
        </li>
        <li>
          In the <strong>indiscrete topology</strong> (where only <InlineMath math="\emptyset" /> and <InlineMath math="X" /> are open), only <InlineMath math="X" /> and <InlineMath math="\emptyset" /> are closed.
        </li>
      </ol>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold">5. <strong>Connecting Closed Sets and Closures</strong></h2>
      <p>
        Here’s a neat fact: The closure of a set <InlineMath math="A" /> is the <strong>smallest closed set containing <InlineMath math="A" /></strong>. This perspective helps solidify the relationship between these two ideas. If you want to "close" a set, just include all points that cannot be separated from it by an open set!
      </p>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold">6. <strong>Conclusion</strong></h2>
      <p>
        Understanding closures and closed sets is essential in topology. These concepts give us a framework to talk about proximity and separation in a way that generalizes beyond the familiar setting of <InlineMath math="\mathbb{R}^n" />. As we move forward, these tools will prove invaluable in exploring continuity, compactness, and connectedness.
      </p>
    </div>
  );
};

export default Closures;
