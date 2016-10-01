(function() {var implementors = {};
implementors["hyper"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for SocketAddrs","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for Parse&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for ParseIntoOwned&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for ByteSerialize&lt;'a&gt;","impl&lt;'a,&nbsp;E&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for PercentEncode&lt;'a,&nbsp;E&gt; <span class='where'>where E: EncodeSet</span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for PercentDecode&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='hyper/header/struct.HeadersItems.html' title='hyper::header::HeadersItems'>HeadersItems</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/ascii/struct.EscapeDefault.html' title='std::ascii::EscapeDefault'>EscapeDefault</a>","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.Iter.html' title='std::collections::hash::map::Iter'>Iter</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.IterMut.html' title='std::collections::hash::map::IterMut'>IterMut</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.IntoIter.html' title='std::collections::hash::map::IntoIter'>IntoIter</a>&lt;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.Keys.html' title='std::collections::hash::map::Keys'>Keys</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.Values.html' title='std::collections::hash::map::Values'>Values</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.ValuesMut.html' title='std::collections::hash::map::ValuesMut'>ValuesMut</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K,&nbsp;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.Drain.html' title='std::collections::hash::map::Drain'>Drain</a>&lt;'a,&nbsp;K,&nbsp;V&gt;","impl&lt;'a,&nbsp;K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.Iter.html' title='std::collections::hash::set::Iter'>Iter</a>&lt;'a,&nbsp;K&gt;","impl&lt;K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.IntoIter.html' title='std::collections::hash::set::IntoIter'>IntoIter</a>&lt;K&gt;","impl&lt;'a,&nbsp;K&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.Drain.html' title='std::collections::hash::set::Drain'>Drain</a>&lt;'a,&nbsp;K&gt;","impl&lt;'a,&nbsp;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.Intersection.html' title='std::collections::hash::set::Intersection'>Intersection</a>&lt;'a,&nbsp;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;'a,&nbsp;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.Difference.html' title='std::collections::hash::set::Difference'>Difference</a>&lt;'a,&nbsp;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;'a,&nbsp;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.SymmetricDifference.html' title='std::collections::hash::set::SymmetricDifference'>SymmetricDifference</a>&lt;'a,&nbsp;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl&lt;'a,&nbsp;T,&nbsp;S&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.Union.html' title='std::collections::hash::set::Union'>Union</a>&lt;'a,&nbsp;T,&nbsp;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html' title='core::hash::Hash'>Hash</a></span>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/env/struct.Vars.html' title='std::env::Vars'>Vars</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/env/struct.VarsOs.html' title='std::env::VarsOs'>VarsOs</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/env/struct.SplitPaths.html' title='std::env::SplitPaths'>SplitPaths</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/env/struct.Args.html' title='std::env::Args'>Args</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/env/struct.ArgsOs.html' title='std::env::ArgsOs'>ArgsOs</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/fs/struct.ReadDir.html' title='std::fs::ReadDir'>ReadDir</a>","impl&lt;R&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/struct.Bytes.html' title='std::io::Bytes'>Bytes</a>&lt;R&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>","impl&lt;R&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/struct.Chars.html' title='std::io::Chars'>Chars</a>&lt;R&gt; <span class='where'>where R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a></span>","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/struct.Split.html' title='std::io::Split'>Split</a>&lt;B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a></span>","impl&lt;B&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/io/struct.Lines.html' title='std::io::Lines'>Lines</a>&lt;B&gt; <span class='where'>where B: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html' title='std::io::BufRead'>BufRead</a></span>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/tcp/struct.Incoming.html' title='std::net::tcp::Incoming'>Incoming</a>&lt;'a&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/net/struct.LookupHost.html' title='std::net::LookupHost'>LookupHost</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sys/ext/net/struct.Incoming.html' title='std::sys::ext::net::Incoming'>Incoming</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Iter.html' title='std::path::Iter'>Iter</a>&lt;'a&gt;","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/path/struct.Components.html' title='std::path::Components'>Components</a>&lt;'a&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.Iter.html' title='std::sync::mpsc::Iter'>Iter</a>&lt;'a,&nbsp;T&gt;","impl&lt;'a,&nbsp;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.TryIter.html' title='std::sync::mpsc::TryIter'>TryIter</a>&lt;'a,&nbsp;T&gt;","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/sync/mpsc/struct.IntoIter.html' title='std::sync::mpsc::IntoIter'>IntoIter</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/rustc_unicode/char/struct.ToLowercase.html' title='rustc_unicode::char::ToLowercase'>ToLowercase</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/rustc_unicode/char/struct.ToUppercase.html' title='rustc_unicode::char::ToUppercase'>ToUppercase</a>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/rustc_unicode/char/struct.DecodeUtf16.html' title='rustc_unicode::char::DecodeUtf16'>DecodeUtf16</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html' title='core::iter::iterator::Iterator'>Iterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u16.html'>u16</a>&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
