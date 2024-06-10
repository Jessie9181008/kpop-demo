import org.springframework.data.jpa.repository.JpaRepository;

public interface IdolRepository extends JpaRepository<Idol, Long> {}
public interface SongRepository extends JpaRepository<Song, Long> {}
public interface NewsRepository extends JpaRepository<News, Long> {}
